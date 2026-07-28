import { forwardRef } from "react";
import type { ComponentProps } from "react";
import { Link as RouterLink } from "react-router-dom";

type LinkProps = Omit<ComponentProps<typeof RouterLink>, "to"> & {
  href: string;
};

// Drop-in replacement for next/link on top of react-router-dom.
const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, ...rest },
  ref,
) {
  if (/^(https?:|mailto:|tel:|#)/.test(href)) {
    return <a ref={ref} href={href} {...rest} />;
  }
  return <RouterLink ref={ref} to={href} {...rest} />;
});

export default Link;
