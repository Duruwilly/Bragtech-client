export const stripHtmlTags = (html) => {
  // Regular expression to remove HTML tags
  return html.replace(/<[^>]*>/g, "");
};
