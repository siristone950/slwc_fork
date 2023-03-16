# streamlit-lightweight-charts
Streamlit wrapper for Tradingview's Financial: `lightweight-charts`

- [Features Demo](https://www.tradingview.com/lightweight-charts/)
- [Documentation](https://tradingview.github.io/lightweight-charts/)
- [GitHub](https://github.com/tradingview/lightweight-charts)

## Types of charts
And correspondent data series



## How to use:
```
streamlit_lightweight_charts(chartOptions={}, series=[], key=None)
```
- [chartOptions](https://tradingview.github.io/lightweight-charts/docs/api/interfaces/ChartOptions): `<object>`
- [series](https://tradingview.github.io/lightweight-charts/docs/series-types): `<array of objects>`
    - type: `<string-enum>`
        - Area
        - Bar
        - Baseline
        - Candlestick
        - Histogram
        - Line
    - data: `<array of objects>` accordingly to series type
    - options: `<object>` with style options
- key: `<string>` optional if creating multiple charts
<br/><br/>

# e.g.:
<br />

![Line Chart sample](https://github.com/freyastreamlit/streamlit-lightweight-charts/blob/main/examples/LineChart.png)

```python
    import streamlit as st
    import streamlit_lightweight_charts

    chartOptions = {
        "layout": {
            "textColor": 'black',
            "background": {
                "type": 'solid',
                "color": 'white'
            }
        }
    }

    seriesLineChart = [{
        "type": 'Line',
        "data": [
            { "time": '2018-12-22', "value": 32.51 },
            { "time": '2018-12-23', "value": 31.11 },
            { "time": '2018-12-24', "value": 27.02 },
            { "time": '2018-12-25', "value": 27.32 },
            { "time": '2018-12-26', "value": 25.17 },
            { "time": '2018-12-27', "value": 28.89 },
            { "time": '2018-12-28', "value": 25.46 },
            { "time": '2018-12-29', "value": 23.92 },
            { "time": '2018-12-30', "value": 22.68 },
            { "time": '2018-12-31', "value": 22.67 },
        ],
        "options": {}
    }]

    st.subheader("Line Chart sample")
    streamlit_lightweight_charts( chartOptions, seriesLineChart, 'line')
```
---
<br />

![Area Chart sample](https://github.com/freyastreamlit/streamlit-lightweight-charts/blob/main/examples/AreaChart.png)

```python
    import streamlit as st
    import streamlit_lightweight_charts

    chartOptions = {
        "layout": {
            "textColor": 'black',
            "background": {
                "type": 'solid',
                "color": 'white'
            }
        }
    }

    seriesAreaChart = [{
        "type": 'Area',
        "data": [
            { "time": '2018-12-22', "value": 32.51 },
            { "time": '2018-12-23', "value": 31.11 },
            { "time": '2018-12-24', "value": 27.02 },
            { "time": '2018-12-25', "value": 27.32 },
            { "time": '2018-12-26', "value": 25.17 },
            { "time": '2018-12-27', "value": 28.89 },
            { "time": '2018-12-28', "value": 25.46 },
            { "time": '2018-12-29', "value": 23.92 },
            { "time": '2018-12-30', "value": 22.68 },
            { "time": '2018-12-31', "value": 22.67 },
        ],
        "options": {}
    }]

    st.subheader("Area Chart sample")
    streamlit_lightweight_charts( chartOptions, seriesAreaChart, 'area')
```
---
<br />

![Histogram Chart sample](https://github.com/freyastreamlit/streamlit-lightweight-charts/blob/main/examples/HistogramChart.png)

```python
    import streamlit as st
    import streamlit_lightweight_charts

    chartOptions = {
        "layout": {
            "textColor": 'black',
            "background": {
                "type": 'solid',
                "color": 'white'
            }
        }
    }

    seriesHistogramChart = [{
        "type": 'Histogram',
        "data": [
            { "value": 1, "time": 1642425322 },
            { "value": 8, "time": 1642511722 },
            { "value": 10, "time": 1642598122 },
            { "value": 20, "time": 1642684522 },
            { "value": 3, "time": 1642770922, "color": 'red' },
            { "value": 43, "time": 1642857322 },
            { "value": 41, "time": 1642943722, "color": 'red' },
            { "value": 43, "time": 1643030122 },
            { "value": 56, "time": 1643116522 },
            { "value": 46, "time": 1643202922, "color": 'red' }
        ],
        "options": { "color": '#26a69a' }
    }]

    st.subheader("Histogram Chart sample")
    streamlit_lightweight_charts( chartOptions, seriesHistogramChart, 'histogram')
```
---
<br />

![Bar Chart sample](https://github.com/freyastreamlit/streamlit-lightweight-charts/blob/main/examples/BarChart.png)

```python
    import streamlit as st
    import streamlit_lightweight_charts

    chartOptions = {
        "layout": {
            "textColor": 'black',
            "background": {
                "type": 'solid',
                "color": 'white'
            }
        }
    }

    seriesBarChart = [{
        "type": 'Bar',
        "data": [
            { "open": 10, "high": 10.63, "low": 9.49, "close": 9.55, "time": 1642427876 },
            { "open": 9.55, "high": 10.30, "low": 9.42, "close": 9.94, "time": 1642514276 },
            { "open": 9.94, "high": 10.17, "low": 9.92, "close": 9.78, "time": 1642600676 },
            { "open": 9.78, "high": 10.59, "low": 9.18, "close": 9.51, "time": 1642687076 },
            { "open": 9.51, "high": 10.46, "low": 9.10, "close": 10.17, "time": 1642773476 },
            { "open": 10.17, "high": 10.96, "low": 10.16, "close": 10.47, "time": 1642859876 },
            { "open": 10.47, "high": 11.39, "low": 10.40, "close": 10.81, "time": 1642946276 },
            { "open": 10.81, "high": 11.60, "low": 10.30, "close": 10.75, "time": 1643032676 },
            { "open": 10.75, "high": 11.60, "low": 10.49, "close": 10.93, "time": 1643119076 },
            { "open": 10.93, "high": 11.53, "low": 10.76, "close": 10.96, "time": 1643205476 }
        ],
        "options": {
            "upColor": '#26a69a',
            "downColor": '#ef5350'
        }
    }]

    st.subheader("Bar Chart sample")
    streamlit_lightweight_charts( chartOptions, seriesBarChart, 'bar')
```
---
<br />

![Candlestick Chart sample](https://github.com/freyastreamlit/streamlit-lightweight-charts/blob/main/examples/CandlestickChart.png)

```python
    import streamlit as st
    import streamlit_lightweight_charts

    chartOptions = {
        "layout": {
            "textColor": 'black',
            "background": {
                "type": 'solid',
                "color": 'white'
            }
        }
    }

    seriesCandlestickChart = [{
        "type": 'Candlestick',
        "data": [
            { "open": 10, "high": 10.63, "low": 9.49, "close": 9.55, "time": 1642427876 },
            { "open": 9.55, "high": 10.30, "low": 9.42, "close": 9.94, "time": 1642514276 },
            { "open": 9.94, "high": 10.17, "low": 9.92, "close": 9.78, "time": 1642600676 },
            { "open": 9.78, "high": 10.59, "low": 9.18, "close": 9.51, "time": 1642687076 },
            { "open": 9.51, "high": 10.46, "low": 9.10, "close": 10.17, "time": 1642773476 },
            { "open": 10.17, "high": 10.96, "low": 10.16, "close": 10.47, "time": 1642859876 },
            { "open": 10.47, "high": 11.39, "low": 10.40, "close": 10.81, "time": 1642946276 },
            { "open": 10.81, "high": 11.60, "low": 10.30, "close": 10.75, "time": 1643032676 },
            { "open": 10.75, "high": 11.60, "low": 10.49, "close": 10.93, "time": 1643119076 },
            { "open": 10.93, "high": 11.53, "low": 10.76, "close": 10.96, "time": 1643205476 }
        ],
        "options": {
            "upColor": '#26a69a',
            "downColor": '#ef5350',
            "borderVisible": False,
            "wickUpColor": '#26a69a',
            "wickDownColor": '#ef5350'
        }
    }]

    st.subheader("Candlestick Chart sample")
    streamlit_lightweight_charts( chartOptions, seriesCandlestickChart, 'candlestick')
```
---
<br />

![Baseline Chart sample](https://github.com/freyastreamlit/streamlit-lightweight-charts/blob/main/examples/BaselineChart.png)

```python
    import streamlit as st
    import streamlit_lightweight_charts

    chartOptions = {
        "layout": {
            "textColor": 'black',
            "background": {
                "type": 'solid',
                "color": 'white'
            }
        }
    }

    seriesBaselineChart = [{
        "type": 'Baseline',
        "data": [
            { "value": 1, "time": 1642425322 },
            { "value": 8, "time": 1642511722 },
            { "value": 10, "time": 1642598122 },
            { "value": 20, "time": 1642684522 },
            { "value": 3, "time": 1642770922 },
            { "value": 43, "time": 1642857322 },
            { "value": 41, "time": 1642943722 },
            { "value": 43, "time": 1643030122 },
            { "value": 56, "time": 1643116522 },
            { "value": 46, "time": 1643202922 }
        ],
        "options": {
            "baseValue": { "type": "price", "price": 25 },
            "topLineColor": 'rgba( 38, 166, 154, 1)',
            "topFillColor1": 'rgba( 38, 166, 154, 0.28)',
            "topFillColor2": 'rgba( 38, 166, 154, 0.05)',
            "bottomLineColor": 'rgba( 239, 83, 80, 1)',
            "bottomFillColor1": 'rgba( 239, 83, 80, 0.05)',
            "bottomFillColor2": 'rgba( 239, 83, 80, 0.28)'
        }
    }]

    st.subheader("Baseline Chart sample")
    streamlit_lightweight_charts( chartOptions, seriesBaselineChart, 'baseline')
```
