/* Scripts for css grid dashboard */

$(document).ready(() => {
    addResizeListeners();
    setUserDropdownListener();
    setMenuClickListener();
    setSidenavCloseListener();
    apexChart();
    loadOverallRequestChart();
    loadRequestVolumeChart();
  });
  
  // Set constants and grab needed elements
  const sidenavEl = $('.sidenav');
  const gridEl = $('.grid');
  const SIDENAV_ACTIVE_CLASS = 'sidenav--active';
  const GRID_NO_SCROLL_CLASS = 'grid--noscroll';
  
  function toggleClass(el, className) {
    if (el.hasClass(className)) {
      el.removeClass(className);
    } else {
      el.addClass(className);
    }
  }
  
  // User avatar dropdown functionality
  function setUserDropdownListener() {
    const userAvatar = $('.header__avatar');
  
    userAvatar.on('click', function(e) {
      const dropdown = $(this).children('.dropdown');
      toggleClass(dropdown, 'dropdown--active');
    });
  }
  
  
  function toggleClass(el, className) {
    if (el.hasClass(className)) {
      el.removeClass(className);
    } else {
      el.addClass(className);
    }
  }
  
  // If user opens the menu and then expands the viewport from mobile size without closing the menu,
  // make sure scrolling is enabled again and that sidenav active class is removed
  function addResizeListeners() {
    $(window).resize(function(e) {
      const width = window.innerWidth; console.log('width: ', width);
  
      if (width > 750) {
        sidenavEl.removeClass(SIDENAV_ACTIVE_CLASS);
        gridEl.removeClass(GRID_NO_SCROLL_CLASS);
      }
    });
  }
  
  // Menu open sidenav icon, shown only on mobile
  function setMenuClickListener() {
    $('.header__menu').on('click', function(e) { console.log('clicked menu icon');
      toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS);
      toggleClass(gridEl, GRID_NO_SCROLL_CLASS);
    });
  }
  
  // Sidenav close icon
  function setSidenavCloseListener() {
    $('.sidenav__brand-close').on('click', function(e) {
      toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS);
      toggleClass(gridEl, GRID_NO_SCROLL_CLASS);
    });
  }

  function apexChart() {
    
    var options = {
      series: [{
      data: [540, 580, 690, 1100, 1200, 1380]
    }],
      chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Model 1', 'Model 2', 'Model 3', 'Model 4', 'Model 5', 'Model 6'
      ],
    }
    };

    var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
    chart.render();
  }

  function loadOverallRequestChart() {
    
    var options = {
      series: [
      {
        name: 'Model 1',
        data: [{
          x: 1001,
          y: 322
        },
        {
          x: 1002,
          y: 324
        },
        {
          x: 1003,
          y: 250
        },
        {
          x: 1004,
          y: 300
        },
        {
          x: 1005,
          y: 150
        },
        {
          x: 1006,
          y: 100
        }
      ]
    }, {
      name: 'Model 2',
      data: [
        {
          x: 1001,
          y: 162
        },
        {
          x: 1002,
          y: 90
        },
        {
          x: 1003,
          y: 50
        },
        {
          x: 1004,
          y: 200
        },
        {
          x: 1005,
          y: 300
        },
        {
          x: 1006,
          y: 100
        }
      ]
    }],
      chart: {
      type: 'area',
      height: 350,
      stacked: true,
      events: {
        selection: function (chart, e) {
          console.log(new Date(e.xaxis.min))
        }
      },
    },
    colors: ['#f77f18', '#985aff'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.3,
        opacityTo: 0.7,
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    }
    };

    var chart = new ApexCharts(document.querySelector("#line-chart"), options);
    chart.render();
  }

  function loadRequestVolumeChart() {
    
    var options = {
      series: [{
      name: 'Model 1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'Model 2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
      chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: [0,0],
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      }
    },
    xaxis: {
      categories: [0, 1, 2, 3, 4, 5, 6]
    },
    };

    var chart = new ApexCharts(document.querySelector("#request-volume-chart"), options);
    chart.render();
  }