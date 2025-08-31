// src/lib/pdf.js
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function exportNodeToPDF(node, filename = "proposal.pdf") {
  const canvas = await html2canvas(node, { scale: 2, backgroundColor: "#ffffff" });
  const img = canvas.toDataURL("image/png");
  const pdf = new jsPDF({ orientation: "p", unit: "pt", format: "a4" });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
  const w = canvas.width * ratio;
  const h = canvas.height * ratio;
  const x = (pageWidth - w) / 2;
  const y = 24;

  pdf.addImage(img, "PNG", x, y, w, h, "", "FAST");
  pdf.save(filename);
}
