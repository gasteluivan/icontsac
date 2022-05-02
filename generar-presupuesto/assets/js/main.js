(function ($) {
  "use strict";

  /*--------------------------------------------------------------
  ## Down Load Button Function
  ----------------------------------------------------------------*/
  $("#download_btn").on("click", function () {
    var downloadSection = $("#download_section");
    var cWidth = downloadSection.width();
    var cHeight = downloadSection.height();
    var topLeftMargin = 40;
    var pdfWidth = cWidth + topLeftMargin * 2;
    var pdfHeight = pdfWidth * 1.5 + topLeftMargin * 2;
    var canvasImageWidth = cWidth;
    var canvasImageHeight = cHeight;
    var totalPDFPages = Math.ceil(cHeight / pdfHeight) - 1;

    html2canvas(downloadSection[0], { allowTaint: true }).then(function (
      canvas
    ) {
      canvas.getContext("2d");
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new jsPDF("p", "pt", [pdfWidth, pdfHeight]);
      pdf.addImage(
        imgData,
        "JPG",
        topLeftMargin,
        topLeftMargin,
        canvasImageWidth,
        canvasImageHeight
      );
      for (var i = 1; i <= totalPDFPages; i++) {
        pdf.addPage(pdfWidth, pdfHeight);
        pdf.addImage(
          imgData,
          "JPG",
          topLeftMargin,
          -(pdfHeight * i) + topLeftMargin * 0,
          canvasImageWidth,
          canvasImageHeight
        );
      }
      pdf.save("ivonne-invoice.pdf");
    });
  });

  $(".inputChange").change(function () {
    var data_input = $(this).attr("data-id");
    console.log(data_input);
    $("#" + data_input).html($(this).val());
  });

  var number = 5000;
  var percentX = 18;
  var result;

  function percentCalculation(a, b) {
    var c = (parseFloat(a) * parseFloat(b)) / 100;
    return parseFloat(c);
  }

  result = percentCalculation(number, percentX);
  console.log(result);


})(jQuery); // End of use strict

// var editor = new EditorJS();

// const editor = new EditorJS({
//   holder: 'editorjs',
//   tools: {
// image: SimpleImage,
// list: List,
// checklist: Checklist,
// quote: Quote,
// warning: Warning,
// marker: Marker,
// code: CodeTool,
// delimiter: Delimiter,
// inlineCode: InlineCode,
// linkTool: LinkTool,
// embed: Embed,
// table: Table
//   },
// });
