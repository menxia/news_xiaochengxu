// pages/main/main.js
const tabMap = {
  0: 'gn',
  1: 'gj',
  2: 'cj',
  3: 'yl',
  4: 'js',
  5: 'ty',
  6: 'other'
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['国内', '国际', '财经', '娱乐', '军事', '体育', '其他'],
    currentTab: 0,
    newsList: ''
  },

  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    this.getNewsList(this.data)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNewsList(this.data)
  },

  getNewsList(config_data, callback){
    // console.log(config_data)
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: tabMap[config_data.currentTab]
      },
      success: res => {
        // console.log('dafd')
        // console.log(res)
        for (var i = 0; i < res.data.result.length; i++) {
          res.data.result[i].date = res.data.result[i].date.slice(11, 16)
          if (!res.data.result[i].source) {
            res.data.result[i].source = '未知'
          }
        }
        this.setData({
          newsList: res.data.result
        })
      },
      complete: () => {
        callback && callback()
      }
    })
  },

  onPullDownRefresh(){
    console.log('refresh')
    this.getNewsList(this.data, ()=>{
      wx.stopPullDownRefresh()
    })
  },

  onTapNews: function(e) {
    console.log(e.currentTarget.dataset.newsid)
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.dataset.newsid,
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
  // onPullDownRefresh: function () {
  
  // },

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