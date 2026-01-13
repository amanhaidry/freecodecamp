// DOM elements
const markdownInputEl = document.getElementById("markdown-input");
const htmlOutputEl = document.getElementById("html-output");
const previewEl = document.getElementById("preview");

function convertMarkdownToHTML(){
    const markdown = markdownInputEl.value;
    let htmlOutput = markdown;

    // headings (### heading3, ## heading2, # heading1)
    htmlOutput = htmlOutput.replace(/^### (.*)$/gm, "<h3>$1</h3>");
    htmlOutput = htmlOutput.replace(/^## (.*)$/gm, "<h2>$1</h2>");
    htmlOutput = htmlOutput.replace(/^# (.*)$/gm, "<h1>$1</h1>");

    // Bold (**bold** or __bold__)
    htmlOutput = htmlOutput.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    htmlOutput = htmlOutput.replace(/__(.*?)__/g, "<strong>$1</strong>");

    // italic (*italic* or _italic_)
    htmlOutput = htmlOutput.replace(/_(.*?)_/g, "<em>$1</em>");
    htmlOutput = htmlOutput.replace(/\*(.*?)\*/g, "<em>$1</em>");

    // Images ![alt text](image_url)
    htmlOutput = htmlOutput.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

    // Links [text](url)
    htmlOutput = htmlOutput.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    // Blockquotes > quote
    htmlOutput = htmlOutput.replace(/^\s*>\s+(.*)$/gm, "<blockquote>$1</blockquote>");

    return htmlOutput;
}

markdownInputEl.addEventListener("input", ()=>{
    const htmlOutput = convertMarkdownToHTML();
    htmlOutputEl.textContent = htmlOutput;
    previewEl.innerHTML = htmlOutput;
})