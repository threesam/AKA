import Image from "./Image.svelte";
import Author from "./Author.svelte";
import Video from "./Video.svelte";
import Link from "./Link.svelte";
import Line from "./Line.svelte";
import CtaButton from "./CtaButton.svelte";

export default {
  marks: {
    link: ({ children, value }) => {
      if (!value?.href) return children;
      return {
        component: Link,
        childNodes: children,
        props: {
          href: value.href,
          external: value.blank || false,
        },
      };
    },
  },
  types: {
    featuredMedia: ({ value }) => {
      if (!value) return null;
      return {
        component: Image,
        childNodes: [],
        props: {
          url: value,
          alt: value.alt,
        },
      };
    },
    image: ({ value }) => {
      if (!value) return null;
      return {
        component: Image,
        childNodes: [],
        props: {
          url: value,
          alt: value.alt,
        },
      };
    },
    videoUrl: ({ value }) => {
      if (!value?.url) return null;
      return {
        component: Video,
        childNodes: [],
        props: {
          url: value.url,
        },
      };
    },
    cta: ({ value }) => {
      if (!value?.url) return null;
      return {
        component: CtaButton,
        childNodes: value.text || value.title || [],
        props: {
          href: value.url,
          type: value.secondary ? "secondary" : "primary",
          target: value.external ? "_blank" : value.target,
          rel: value.external ? "noopener noreferrer" : null,
        },
      };
    },
    authorReference: ({ value }) => {
      if (!value?.author) return null;
      return {
        component: Author,
        childNodes: [],
        props: {
          author: value.author,
        },
      };
    },
    lineBreak: ({ value }) => {
      if (!value?.type) return null;
      return {
        component: Line,
        childNodes: [],
        props: {
          type: value.type,
        },
      };
    },
  },
};
