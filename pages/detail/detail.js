// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news: {
      "id": 1519631218693,
      "title": "外媒称香港回归15年打破“经济将死”预言",
      "date": "2012-07-01T09:34:12.000Z",
      "source": "中国新闻网",
      "firstImage": "http://img1.gtimg.com/news/pics/hv1/38/85/1076/69988613.jpg",
      "content": [
        {
          "type": "p",
          "text": "报道特别强调金融合作方面，中央支持第三方利用香港办理人民币贸易投资结算，进一步丰富香港人民币离岸产品”。自1997年7月1日回归之后，香港与内地的经济关系日益紧密，“北京方面迫切希望利用这个全球金融中心来进行重大改革试验，比如将人民币国际化的努力。”"
        },
        {
          "type": "p",
          "text": "一些香港居民在接受美国CNN采访时表达了对香港特区以及新任特首的看法。多数香港居民认为，回归以来，“一国两制”实行得不错，相信“一国两制”将进展良好，相信香港的前途会更光明。希望新任特首上台后，能进一步改善包括住房在内的民生条件。"
        }
      ],
      "readCount": 471
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail',
      data:{
        id: options.id
      },
      success: res=>{
        // console.log(res)
        res.data.result.date = res.data.result.date.slice(11,16)
        if (!res.data.result.source){
          res.data.result.source='未知'
        }
        this.setData({
          news: res.data.result
        })
      }
      
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})