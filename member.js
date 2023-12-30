function skillMember() {
  return {
    restrict: 'E',
    scope: {
      member: '=',
    },
    templateUrl: 'views/skill-member.html',
  };
}
