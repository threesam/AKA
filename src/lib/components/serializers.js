import Image from "./Image.svelte";
import Author from "./Author.svelte";
import Video from "./Video.svelte";
import Link from "./Link.svelte";
import Line from "./Line.svelte";
import CtaButton from "./CtaButton.svelte";

export default {
  marks: {
    link: ({ children, mark }) => ({
      component: Link,
      childNodes: children,
      props: mark,
    }),
  },
  types: {
    featuredMedia: ({ node, children }) => ({
      component: Image,
      childNodes: children,
      props: {
        url: node,
        alt: node.alt,
      },
    }),
    image: ({ node, children }) => ({
      component: Image,
      childNodes: children,
      props: {
        url: node,
      },
    }),
    videoUrl: ({ node, children }) => ({
      component: Video,
      childNodes: children,
      props: {
        url: node.url,
      },
    }),
    cta: ({ node, children }) => ({
      component: CtaButton,
      childNodes: node.text || node.title || children,
      props: {
        href: node.url,
        type: node.secondary ? "secondary" : "primary",
        target: node.external ? "_blank" : node.target,
        rel: node.external ? "noopener noreferrer" : null,
      },
    }),
    authorReference: ({ children, node: { author } }) => ({
      component: Author,
      childNodes: children,
      props: {
        author,
      },
    }),
    lineBreak: ({ children, node: { type } }) => ({
      component: Line,
      childNodes: children,
      props: {
        type,
      },
    }),
  },
};
