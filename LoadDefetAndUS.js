var defectAndUS = [];
$("#x4-gen1518 table .formatted-id-link").each(function (index) {
    console.log(index + ": " + $(this).text());
    defectAndUS.push($(this).text());
});
defectAndUS.sort();
defectAndUS;
