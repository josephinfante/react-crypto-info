import { Chart, registerables } from "chart.js";

interface Props {
    labels?: string[] | any
    data?: string[]
    borderColor?: string
    fill?: boolean
    chartLabel?: string
    backgroundColor?: string
    borderWidth?: number
    tension?: number
}

const customChart = (props: Props) => {
    Chart.register(...registerables);
    let chart = new Chart('chart', {
        type: 'line',
        data: {
          labels: props.labels,
          datasets: [
            {
              data: props.data,
              borderColor: props.borderColor || '#515151',
              fill: props.fill || false,
              label: props.chartLabel || '',
              backgroundColor: props.backgroundColor || '#181818',
              borderWidth: props.borderWidth || 3,
              tension: props.tension || 0.5,
              pointBackgroundColor: '#574AE2',
              pointBorderColor: '#574AE2',
              pointHoverBackgroundColor: '#574AE2',
              spanGaps: true
            }
          ]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    return chart
}

export default customChart