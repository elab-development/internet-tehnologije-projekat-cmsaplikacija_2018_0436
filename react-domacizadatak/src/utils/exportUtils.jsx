import html2canvas from "html2canvas";

// Export as PNG
export const exportAsPNG = async (element, fileName) => {
  const canvas = await html2canvas(element);
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = image;
  link.download = fileName;
  link.click();
};

// Export as HTML
// export const exportAsHTML = (element, fileName) => {
//   const htmlContent = element.outerHTML;
//   const blob = new Blob([htmlContent], { type: 'text/html' });
//   const link = document.createElement('a');
//   link.href = URL.createObjectURL(blob);
//   link.download = fileName;
//   link.click();
// };

// Export as HTML with CSS
export const exportAsHTML = (element, fileName) => {
  // Get the HTML content
  const htmlContent = element.outerHTML;

  // Get all the stylesheets
  const stylesheets = Array.from(document.styleSheets)
    .map((sheet) => {
      try {
        return Array.from(sheet.cssRules)
          .map((rule) => rule.cssText)
          .join("");
      } catch (e) {
        console.warn(
          "Access to stylesheet %s is restricted due to CORS policy",
          sheet.href
        );
        return "";
      }
    })
    .join("");

  // Embed styles in the HTML
  const fullHtmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Exported Design</title>
      <style>${stylesheets}</style>
    </head>
    <body>
      ${htmlContent}
    </body>
    </html>
  `;

  // Create a Blob and download the file
  const blob = new Blob([fullHtmlContent], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
};
