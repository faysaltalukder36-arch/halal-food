
/*
  Halal Food — Google Apps Script
  1. Create/open a Google Sheet.
  2. Extensions -> Apps Script.
  3. Paste this code.
  4. Change SHEET_NAME if needed.
  5. Deploy -> New deployment -> Web app.
  6. Execute as: Me
  7. Who has access: Anyone
  8. Copy the Web App URL into js/main.js.
*/

const SHEET_NAME = "Orders";

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
    || SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Timestamp","Product","Name","Mobile","Address","District","Upazila","Quantity","Notes"]);
  }

  let data = {};
  try {
    data = JSON.parse(e.postData.contents || "{}");
  } catch (_) {
    data = e.parameter || {};
  }

  sheet.appendRow([
    new Date(),
    data.product || "",
    data.name || "",
    data.mobile || "",
    data.address || "",
    data.district || "",
    data.upazila || "",
    data.quantity || "",
    data.notes || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({success:true}))
    .setMimeType(ContentService.MimeType.JSON);
}
