let methods = {
  numberWithCommas: function(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

exports.data = methods;
