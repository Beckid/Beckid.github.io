function downloadFile(link_element) {
	var week_number = link_element.parent().prev().text();
	var code = prompt("Please enter the code for our Discussion Group");

	if (code == "toDone") {
		var verified_week_number = get_week_number(week_number);
		alert("Thanks for downloading the materials in Discussion Group Week " + verified_week_number + ".");
		begin_download(link_element, verified_week_number);
	} else {
		alert("Sorry. It seems that you are not from Yunpeng's Discussion Group. Please approach your own Avenger.");
	}
}

function get_week_number(week_number) {
	if (!isNaN(week_number)) {
		var num = parseInt(week_number);

		if (Number.isInteger(num) && num > 1 && num < 14) {
			return num;
		} else {
			return -1;
		}
	} else {
		return -1;
	}
}

function begin_download(link_element, week_number) {
	link_element.attr("href", "file/" + week_number);
	link_element.attr("download", "Week " + week_number + ".pdf");
}