// 数据集
const data = [
    {label: "Txn Val", value: 84},
    {label: "Txn Vol", value: 81},
    {label: "Account Vol", value: 80},
    {label: "City", value: 72},
    {label: "New Aboard", value: 60},
    {label: "Avg Txn Val", value: 55},
    {label: "Max Txn Val", value: 45},
    {label: "Max Txn Vol", value: 31},
    {label: "Ctp Vol", value: 28},
    {label: "Min Txn Val", value: 10}

];

// 设置画布大小
const margin = {top: 20, right: 30, bottom: 40, left: 40},
      width = 600 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

// 创建SVG元素
const svg = d3.select("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
            .append("g")
              .attr("transform", `translate(${margin.left},${margin.top})`);

// X轴比例尺
const x = d3.scaleBand()
            .domain(data.map(d => d.label))
            .range([0, width])
            .padding(0.2);

// Y轴比例尺
const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)])
            .nice()
            .range([height, 0]);

// 添加X轴
svg.append("g")
   .attr("transform", `translate(0,${height})`)
   .call(d3.axisBottom(x))
   .selectAll("text")
   .attr("class", "axis-label");

// 添加Y轴
svg.append("g")
   .call(d3.axisLeft(y));

// 绘制条形图
svg.selectAll(".bar")
   .data(data)
   .enter().append("rect")
   .attr("class", "bar")
   .attr("x", d => x(d.label))
   .attr("y", d => y(d.value))
   .attr("width", x.bandwidth())
   .attr("height", d => height - y(d.value));