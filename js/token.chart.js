window.onload = function() {
  function createChart(id, colors) {
    return new RGraph.Pie({
      id: id,
      data: [51, 12, 17, 20],
      options: {
        gutterLeft: 0,
        gutterRight: 0,
        gutterTop: 0,
        gutterBottom: 0,
        linewidth: 0,
        strokestyle: 'rgba(0,0,0,0)',
        labelsIngraph: false,
        labelsIngraphBounding: false,
        labelsIngraphColor: '#fff',
        labelsIngraphSize: 20,
        colors: colors,
        variant: 'pie3d',
        radius: 120,
        labelsSticksList: false,
        textSize: 10,
        //labelsSticksColors: [, '#cc0', '#0f0'],
        shadowOffsety: 5,
        shadowColor: '#aaa',
        exploded: [10, 10, 10, 10],
        variantThreedDepth: 15,
        textAccessible: false
      }
    }).draw();
  }

  var pie1 = createChart('chart-doughnut-token-sale', ['#57b6b3', '#ed2947', '#f69349', '#951c3c']);
  var pie2 = createChart('chart-doughnut-marketing', ['#57b6b3', '#ed2947', '#f69349', '#951c3c']);
  var pie3 = createChart('chart-doughnut-operational-expenses', ['#57b6b3', '#ed2947', '#f69349', '#951c3c']);
  var pie4 = createChart('chart-doughnut-team', ['#57b6b3', '#ed2947', '#f69349', '#951c3c']);
};
