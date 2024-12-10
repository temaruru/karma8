window.onload = function() {
    var options1 = {
        animationEnabled: true,
        axisX: {
            labelFontSize: 14
        },
        axisY: {
            labelFontSize: 14
        },
        data: [{
            type: "line",
            dataPoints: [
                { y: 10 },
                { y: 6 },
                { y: 14 },
                { y: 12 },
                { y: 19 },
                { y: 14 },
                { y: 26 },
                { y: 10 },
                { y: 22 }
            ]
        }, {
            type: "line",
            dataPoints: [
                { y: 4 },
                { y: 16 },
                { y: 15 },
                { y: 9 },
                { y: 19 },
                { y: 2 },
                { y: 55 },
                { y: 3 },
                { y: 9 }
            ]
        }]
    };

    var options2 = {
        axisX: {
            labelFontSize: 14
        },
        axisY: {
            labelFontSize: 14
        },
        data: [{
            type: "line",
            dataPoints: [
                { y: 10 },
                { y: 6 },
                { y: 14 },
                { y: 12 },
                { y: 19 },
                { y: 14 },
                { y: 26 },
                { y: 10 },
                { y: 22 }
            ]
        }, {
            type: "line",
            dataPoints: [
                { y: 5 },
                { y: 34 },
                { y: 1 },
                { y: 4 },
                { y: 19 },
                { y: 5 },
                { y: 65 },
                { y: 66 },
                { y: 9 }
            ]
        }]
    };

    $("#tabs2").tabs({})
    $("#tabs").tabs({
        create: function () {
            $("#chartContainer1").CanvasJSChart(options1);
            $("#chartContainer2").CanvasJSChart(options2);
        },
        activate: function (event, ui) {
            ui.newPanel.children().first().CanvasJSChart().render();
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.tabsSecond');
    const leftArrow = document.querySelector('.arrow:first-of-type');
    const rightArrow = document.querySelector('.arrow:last-of-type');
    const scrollAmount = 100;

    leftArrow.addEventListener('click', function() {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', function() {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});
