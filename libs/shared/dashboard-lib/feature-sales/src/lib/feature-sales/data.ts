import { ChartType } from "./sales.model";

const linewithDataChart: ChartType = {
    chart: {
        height: 380,
        type: 'line',
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    colors: ["#4e54c8"],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    series: [{
        name: "High - 2018",
        data: [0, 100, 200, 150, 50, 0, 0, 50, 0, 50, 50, 50, 0, 100, 0]
    }
    ],
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2,
        },
        borderColor: '#f1f1f1',
    },
    markers: {
        style: "inverted",
        size: 6,
        hover: {
            size: 6,
        },
    },
    xaxis: {
        categories: ["22 Jul", "", "24 Jul", "", "26 Jul", "", "28 Jul", "", "30 Jul", "", "01 Aug", "", "03 Aug", "", "05 Aug"]
    },
    yaxis: {
        min: 0,
        max: 200,
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5,
    },
    responsive: [
        {
            breakpoint: 600,
            options: {
                chart: {
                    toolbar: {
                        show: false,
                    },
                },
                legend: {
                    show: false,
                },
            },
        },
    ],
};

//order count chart

const OrderCountChart: ChartType = {
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    colors: ["#4e54c8"],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    series: [{
        name: "High - 2018",
        data: [0, 2, 4, 3, 1, 0, 0, 1, 0, 1, 1, 1, 0, 2, 0]
    }
    ],
    // grid: {
    //     row: {
    //         colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
    //         opacity: 1,
    //     },
    //     column: {
    //         colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
    //         opacity: 1,
    //     },
    //     borderColor: '#4e54c8',
    // },
    markers: {
        style: "inverted",
        size: 6,
        hover: {
            size: 6,
        },
    },
    xaxis: {
        categories: ["22 Jul", "", "24 Jul", "", "26 Jul", "", "28 Jul", "", "30 Jul", "", "01 Aug", "", "03 Aug", "", "05 Aug"]
    },
    yaxis: {
        min: 0,
        max: 4,
    },
    responsive: [
        {
            breakpoint: 600,
            options: {
                chart: {
                    toolbar: {
                        show: false,
                    },
                },
                legend: {
                    show: false,
                },
            },
        },
    ],
};

const tableData = [
  {
    id: 1,
    order_id: '34VB5540K83',
    date: 'May 21, 2019',
    status: 'In Progress',
    status_color: 'info',
    total: '358.75'
  },
  {
    id: 2,
    order_id: '78A643CD409',
    date: 'December 09, 2018',
    status: 'Canceled',
    status_color: 'danger',
    total: '760.50'
  },
  {
    id: 3,
    order_id: '112P45A90V2',
    date: 'October 15, 2018',
    status: 'Delayed',
    status_color: 'warning',
    total: '1,264.00'
  },
  {
    id: 4,
    order_id: '28BA67U0981',
    date: 'July 19, 2018',
    status: 'Delivered',
    status_color: 'success',
    total: '198.35'
  },
  {
    id: 5,
    order_id: '502TR872W2',
    date: 'April 04, 2018',
    status: 'Delivered',
    status_color: 'success',
    total: '2,133.90'
  },
  {
    id: 6,
    order_id: '47H76G09F33',
    date: 'March 30, 2018',
    status: 'Delivered',
    status_color: 'success',
    total: '86.40'
  },
  {
    id: 7,
    order_id: '34VB5540K83',
    date: 'May 21, 2019',
    status: 'In Progress',
    status_color: 'info',
    total: '358.75'
  },
  {
    id: 8,
    order_id: '78A643CD409',
    date: 'December 09, 2018',
    status: 'Canceled',
    status_color: 'danger',
    total: '760.50'
  },
  {
    id: 9,
    order_id: '112P45A90V2',
    date: 'October 15, 2018',
    status: 'Delayed',
    status_color: 'warning',
    total: '1,264.00'
  },
  {
    id: 10,
    order_id: '28BA67U0981',
    date: 'July 19, 2018',
    status: 'Delivered',
    status_color: 'success',
    total: '198.35'
  },
  {
    id: 11,
    order_id: '502TR872W2',
    date: 'April 04, 2018',
    status: 'Delivered',
    status_color: 'success',
    total: '2,133.90'
  },
  {
    id: 12,
    order_id: '47H76G09F33',
    date: 'March 30, 2018',
    status: 'Delivered',
    status_color: 'success',
    total: '86.40'
  },
  {
    id: 13,
    order_id: '34VB5540K83',
    date: 'May 21, 2019',
    status: 'In Progress',
    status_color: 'info',
    total: '358.75'
  },
  {
    id: 14,
    order_id: '78A643CD409',
    date: 'December 09, 2018',
    status: 'Canceled',
    status_color: 'danger',
    total: '760.50'
  },
  {
    id: 15,
    order_id: '112P45A90V2',
    date: 'October 15, 2018',
    status: 'Delayed',
    status_color: 'warning',
    total: '1,264.00'
  },
];

export { linewithDataChart, OrderCountChart, tableData }
