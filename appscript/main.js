const CONFIG = {
    DATABASE_ID : "",
    TITLE : "React-Appscript",
    SHEET_NAME : ""
}

function doGet(e) {
    return HtmlService
        .createTemplateFromFile('index.html')
        .evaluate()
        .setTitle(CONFIG.TITLE)
        .addMetaTag('viewport', 'width=device-width, initial-scale=1')
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function hello() {
    return "Hello..!"
}

