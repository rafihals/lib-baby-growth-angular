import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-pie',
  templateUrl: './pie.page.html',
  styleUrls: ['./pie.page.scss'],
})

export class PiePage implements OnInit {

  isLoading: boolean = true;

  constructor() { }

  ngOnInit() {
    this.initializeLoader()
    this.createPieChart();
    this.createBarChart();
  }

  initializeLoader() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  createPieChart() {
    const ctx = (document.getElementById('pieChart') as HTMLCanvasElement).getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['0-3 months', '4-6 months', '6-9 months', '9-12 months', '18-24 months', '24-36 months'],
        datasets: [{
          label: 'Developmental Milestones',
          data: [3, 3, 3, 3, 6, 12],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });
  }

  createBarChart() {
    const ctx = (document.getElementById('barChart') as HTMLCanvasElement).getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['0-3 months', '4-6 months', '6-9 months', '9-12 months', '18-24 months', '24-36 months'],
        datasets: [{
          label: 'Developmental Milestones',
          data: [3, 3, 3, 3, 6, 12],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        responsive: true
      }
    });
  }

}
