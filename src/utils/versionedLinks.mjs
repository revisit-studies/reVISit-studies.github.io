/**
 * Only moving study links and unversioned docs links follow the active docs.
 * @param {string} href
 * @param {{name: string, path: string}} [version]
 */
export function resolveVersionedLink(href, version) {
  if (!version || !/^(https?:\/\/|\/)/.test(href)) return href;

  const url = new URL(href, 'https://revisit.dev');
  const suffix = url.search + url.hash;

  if (url.origin === 'https://revisit.dev') {
    const docs = url.pathname.match(/^\/docs(?:\/(.*))?$/);
    if (docs && !/^(next|v\d[^/]*)(\/|$)/.test(docs[1] ?? '')) {
      return `${version.path.replace(/\/$/, '')}/${docs[1] ?? ''}${suffix}`;
    }

    if (version.name === 'current' && /^\/study(?:\/|$)/.test(url.pathname)) {
      const path = url.pathname.replace(/^\/study\/?/, '');
      // Explicit deployment links are already pinned to their own environment.
      if (!/^(dev|dev-supabase|supabase|PR\d+)(\/|$)/.test(path)) {
        return `https://revisit.dev/study/dev/${path}${suffix}`;
      }
    }
  }

  if (version.name === 'current') {
    if (url.origin === 'https://github.com') {
      url.pathname = url.pathname.replace(
        /^(\/revisit-studies\/study\/(?:tree|blob)\/)main(?=\/|$)/i,
        '$1dev',
      );
    } else if (url.origin === 'https://raw.githubusercontent.com') {
      url.pathname = url.pathname.replace(/^(\/revisit-studies\/study\/)main(?=\/|$)/i, '$1dev');
    }
    if (url.href !== new URL(href, 'https://revisit.dev').href) return url.href;
  }

  return href;
}
