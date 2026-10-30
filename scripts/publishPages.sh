#!/usr/bin/env bash
set -euo pipefail

source_dir="${1:?Build directory required}"
pages_dir="${2:?Pages checkout required}"
destination="${3:-}"

if [[ -n "$destination" && ! "$destination" =~ ^PR[0-9]+$ ]]; then
  echo 'Preview destination must be PR followed by its number.' >&2
  exit 1
fi

if [[ -n "$destination" ]]; then
  if [[ "$source_dir" == '--delete' ]]; then
    rm -rf "$pages_dir/$destination"
  else
    mkdir -p "$pages_dir/$destination"
    rsync -a --delete "$source_dir/" "$pages_dir/$destination/"
  fi
else
  # Preserve open previews, but delete obsolete production routes and assets.
  rsync -a --delete --exclude='/.git/' --exclude='/PR[0-9]*/' "$source_dir/" "$pages_dir/"
  printf 'revisit.dev\n' > "$pages_dir/CNAME"
fi
touch "$pages_dir/.nojekyll"

git -C "$pages_dir" add --all
if ! git -C "$pages_dir" diff --cached --quiet; then
  git -C "$pages_dir" -c user.name='github-actions[bot]' \
    -c user.email='41898282+github-actions[bot]@users.noreply.github.com' \
    commit -m "Publish documentation ${destination:-site}"
  git -C "$pages_dir" push origin HEAD:gh-pages
fi
