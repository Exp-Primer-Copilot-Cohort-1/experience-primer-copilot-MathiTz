function skillMember() {
  return {
    restrict: 'E',
    scope: {
      member: '=',
      memberClass: '=',
      memberIndex: '=',
      memberCount: '=',
    },
    templateUrl: 'skill-member.html',
  };
}
