"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Swapi=function(){function t(e){_classCallCheck(this,t),this.$http=e}return t.$inject=["$http"],_createClass(t,[{key:"get",value:function(t){return t=t.replace("http:","https:"),this.$http.get(t)}},{key:"getPlanets",value:function(t){var e=this,n=void 0;return this.get(t).then(function(t){n=t.data;for(var r=n.results,a=function(t){r[t].terrain=r[t].terrain.split(", ");for(var n=function(n){e.get(r[t].films[n]).then(function(e){r[t].films[n]=e.data.title})},a=0;a<r[t].films.length;a++)n(a);r[t].films.length>r[t].terrain.length?(r[t].biggest="films",r[t].smallest="terrain"):(r[t].biggest="terrain",r[t].smallest="films")},i=0;i<r.length;i++)a(i);return n})}}]),t}();exports.default=Swapi;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3YXBpLnNlcnZpY2UuanMiXSwibmFtZXMiOlsiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJrZXkiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJTd2FwaSIsIiRodHRwIiwidGhpcyIsInVybCIsInJlcGxhY2UiLCJnZXQiLCJfdGhpcyIsImRhdGEiLCJ0aGVuIiwicmVzIiwicmVzdWx0cyIsIl9sb29wIiwidGVycmFpbiIsInNwbGl0IiwiX2xvb3AyIiwiaiIsImZpbG1zIiwidGl0bGUiLCJiaWdnZXN0Iiwic21hbGxlc3QiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQVFBLFNBQVNBLGlCQUFnQkMsRUFBVUMsR0FBZSxLQUFNRCxZQUFvQkMsSUFBZ0IsS0FBTSxJQUFJQyxXQUFVLHFDQU5oSEMsT0FBT0MsZUFBZUMsUUFBUyxjQUM3QkMsT0FBTyxHQUdULElBQUlDLGNBQWUsV0FBYyxRQUFTQyxHQUFpQkMsRUFBUUMsR0FBUyxJQUFLLEdBQUlDLEdBQUksRUFBR0EsRUFBSUQsRUFBTUUsT0FBUUQsSUFBSyxDQUFFLEdBQUlFLEdBQWFILEVBQU1DLEVBQUlFLEdBQVdDLFdBQWFELEVBQVdDLGFBQWMsRUFBT0QsRUFBV0UsY0FBZSxFQUFVLFNBQVdGLEtBQVlBLEVBQVdHLFVBQVcsR0FBTWIsT0FBT0MsZUFBZUssRUFBUUksRUFBV0ksSUFBS0osSUFBaUIsTUFBTyxVQUFVWixFQUFhaUIsRUFBWUMsR0FBaUosTUFBOUhELElBQVlWLEVBQWlCUCxFQUFZbUIsVUFBV0YsR0FBaUJDLEdBQWFYLEVBQWlCUCxFQUFha0IsR0FBcUJsQixNQUwzZ0JvQixNQVNULFdBUFYsUUFBQUEsR0FBT0MsR0FBQXZCLGdCQUFBd0IsS0FBQUYsR0FDSEUsS0FBS0QsTUFBUUEsRUEyRGpCLDJCQTdDQWYsYUFBYWMsSUFBYkosSUFBQSxNQUNFWCxNQUFLLFNBWkhrQixHQUVGLE1BREpBLEdBQVNBLEVBQUFDLFFBQUEsUUFBZ0IsVUFDZEYsS0FBS0QsTUFBTUksSUFBSUYsTUFnQnRCUCxJQURDLGFBQ0RYLE1BQUssU0FiSWtCLEdBQUssR0FBQUcsR0FBQUosS0FUaEJLLEVBQUFBLE1BQW1CLE9BQUFMLE1BQUFHLElBQUFGLEdBWWRLLEtBQUssU0FBQ0MsR0FYUEYsRUFBS04sRUFBUUEsSUFjWCxLQUFLLEdBRENTLEdBQVVILEVBQUtHLFFBRlJDLEVBQUEsU0FHSnJCLEdBQWZvQixFQUFhcEIsR0FBQXNCLFFBQVFGLEVBQUFwQixHQUFBc0IsUUFBQUMsTUFBQSxLQUNkLEtBQUEsR0FKWUMsR0FBQSxTQUlaQyxHQUNFVCxFQUFBRCxJQUFTSyxFQWJUcEIsR0FBQTBCLE1BQUFELElBQUFQLEtBQUEsU0FBQUMsR0FDRE4sRUFBSUMsR0FBUVksTUFBQUQsR0FBU04sRUFBQUYsS0FBQVUsU0FXdEJGLEVBQUEsRUFBQUEsRUFBQUwsRUFBQXBCLEdBQUEwQixNQUFBekIsT0FBQXdCLElBQUFELEVBQUFDLEVBS0pMLEdBQUFwQixHQUFBMEIsTUFBQXpCLE9BQUFtQixFQUFBcEIsR0FBQXNCLFFBQUFyQixRQUNJbUIsRUFBQXBCLEdBQUE0QixRQUFBLFFBQ0VSLEVBQVNwQixHQUFBNkIsU0FkUGhCLFlBaUJETyxFQUFRcEIsR0FBRzRCLFFBQVUsVUFoQnpCWCxFQUFBQSxHQUFBQSxTQUFBQSxVQUtTakIsRUFBSSxFQUFHQSxFQUFJb0IsRUFBUW5CLE9BQVFELElBQUtxQixFQUFoQ3JCLEVBZVgsT0FoQlFvQixTQThDTFYsSUFHVGhCLFNBQVFvQyxRQWpFYXBCIiwiZmlsZSI6InN3YXBpLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3YXBpIHtcbiAgLyogQG5nSW5qZWN0ICovXG4gIGNvbnN0cnVjdG9yKCRodHRwKSB7XG4gICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gIH1cblxuICBnZXQodXJsKSB7XG4gICAgdXJsID0gdXJsLnJlcGxhY2UoJ2h0dHA6JywgJ2h0dHBzOicpO1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh1cmwpO1xuICB9XG5cbiAgZ2V0UGxhbmV0cyh1cmwpIHtcbiAgICBsZXQgZGF0YTtcbiAgICByZXR1cm4gdGhpcy5nZXQodXJsKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBkYXRhLnJlc3VsdHM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHJlc3VsdHNbaV0udGVycmFpbiA9IHJlc3VsdHNbaV0udGVycmFpbi5zcGxpdCgnLCAnKTtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdHNbaV0uZmlsbXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0KHJlc3VsdHNbaV0uZmlsbXNbal0pLnRoZW4oKHJlcykgPT57XG4gICAgICAgICAgICAgIHJlc3VsdHNbaV0uZmlsbXNbal0gPSByZXMuZGF0YS50aXRsZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0c1tpXS5maWxtcy5sZW5ndGggPiByZXN1bHRzW2ldLnRlcnJhaW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHRzW2ldLmJpZ2dlc3QgPSAnZmlsbXMnO1xuICAgICAgICAgICAgcmVzdWx0c1tpXS5zbWFsbGVzdCA9ICd0ZXJyYWluJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0c1tpXS5iaWdnZXN0ID0gJ3RlcnJhaW4nO1xuICAgICAgICAgICAgcmVzdWx0c1tpXS5zbWFsbGVzdCA9ICdmaWxtcyc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuXG4gIH1cbn1cbiJdfQ==
