var defectAndUS = [],
    milestoneFilter = ['Usher 2.4.020'];
$("table tr").each(function (index) {
    var id = $(this).find('.formatted-id-link').text(),
        milestones = $(this).find('.milestone-pill'),
        milestone = null;
    for (var i = 0; i < milestones.length; i++) {
        var temp = $(milestones[i]).text();
        if (milestoneFilter.indexOf(temp) > -1) {
            milestone = temp;
            break;
        }
    }
    if (id && milestone && milestone !== null && defectAndUS.indexOf(id) === -1) {
        console.log(index + ": " + id + "," + milestone);
        defectAndUS.push(id);
    }
});
defectAndUS.sort();
defectAndUS;
