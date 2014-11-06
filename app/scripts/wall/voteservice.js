angular.module('VotingService', []).factory('VotingService', ['$http', '$q', '$timeout', function($http, $q, $timeout) {

    var topOfWeekUrl = "http://172.19.0.40:3000/bestofweek";
    var topOfDayUrl = "http://172.19.0.40:3000/bestoftoday";

    return {
        topOfWeek: function() {
            var defer = $q.defer();

            $timeout(function() {
                var data = [
                    { talkId: "1317" },
                    { talkId: "1352" },
                    { talkId: "1351" },
                    { talkId: "1380" }

                ];
                defer.resolve(data);
            }, 500);

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
                    { talkId: "1461" },
                    { talkId: "1452" },
                    { talkId: "1445" },
                    { talkId: "1315" }

                ];
                defer.resolve(data);
            }, 500);

            //$http.get(topOfDayUrl).success(function(data, status, headers, config) {
            //    defer.resolve(data);
            //}).error(function(data, status, headers, config) {
            //    defer.reject(data);
            //});
            return defer.promise;
        }
    }
}] );
