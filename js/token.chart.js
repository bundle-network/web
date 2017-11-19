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
        labelsIngraph: true,
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
        variantThreedDepth: 30,
        textAccessible: false
      }
    }).draw();
  }

  var pie1 = createChart('chart-doughnut-token-sale', ['#1abc9c', '#e1e1e1', '#e1e1e1', '#e1e1e1']);
  var pie2 = createChart('chart-doughnut-marketing', ['#e1e1e1', '#1abc9c', '#e1e1e1', '#e1e1e1']);
  var pie3 = createChart('chart-doughnut-operational-expenses', ['#e1e1e1', '#e1e1e1', '#1abc9c', '#e1e1e1']);
  var pie4 = createChart('chart-doughnut-team', ['#e1e1e1', '#e1e1e1', '#e1e1e1', '#1abc9c']);
};
