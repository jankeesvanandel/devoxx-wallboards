angular.module('VotingService', []).factory('VotingService', ['$http', '$q', '$timeout', function($http, $q, $timeout) {

    var topOfWeekUrl = "http://172.19.0.40:3000/bestofweek";
    var topOfDayUrl = "http://172.19.0.40:3000/bestoftoday";

    return {
        topOfWeek: function() {
            var defer = $q.defer();

            $timeout(function() {
                var data = [
                    { talkId: "1420" },
                    { talkId: "1704" },
                    { talkId: "1705" },
                    { talkId: "1712" }

                ];
                defer.resolve(data);
            }, 5);

            //$http.get(topOfWeekUrl).success(function(data, status, headers, config) {
            //    defer.resolve(data);
            //}).error(function(data, status, headers, config) {
            //    defer.reject(data);
            //});
            return defer.promise;
        },
        topOfDay : function(callback) {
            var defer = $q.defer();

            $timeout(function() {
                var data = [
                    { talkId: "1712" },
                    { talkId: "1805" },
                    { talkId: "1810" },
                    { talkId: "1832" }

                ];
                defer.resolve(data);
            }, 5);

            //$http.get(topOfDayUrl).success(function(data, status, headers, config) {
            //    defer.resolve(data);
            //}).error(function(data, status, headers, config) {
            //    defer.reject(data);
            //});
            return defer.promise;
        }
    }
}] );
