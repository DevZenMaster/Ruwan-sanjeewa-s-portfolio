import { Heading } from "@/lib/types";

export const getNestedHeadings = (headingElements: Element[]): Heading[] => {
  const nestedHeadings: Heading[] = [];

  headingElements.forEach((heading) => {
    const { innerText: title, id } = heading as HTMLElement;

    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
        items: [],
      });
    }
  });

  return nestedHeadings;
};