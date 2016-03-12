angular.module('wordlift.editpost.widget.directives.wlEntityTile', [])
.directive('wlEntityTile', [ 'configuration','$log', (configuration, $log)->
    require: '?^wlClassificationBox'
    restrict: 'E'
    scope:
      entity: '='
      isSelected: '='
      showConfidence: '='
      onEntitySelect: '&'
    template: """
  	  <div ng-class="'wl-' + entity.mainType" class="entity">
        <div class="entity-header">
  	      
          <i ng-click="onEntitySelect()" ng-hide="annotation" ng-class="{ 'wl-selected' : isSelected, 'wl-unselected' : !isSelected }"></i>
          <i ng-click="onEntitySelect()" class="type"></i>
          <span class="label" ng-click="onEntitySelect()">{{entity.label}}</span>

          <small ng-show="entity.occurrences.length > 0">({{entity.occurrences.length}})</small>
          <span ng-show="isInternal()" class="dashicons dashicons-tag wl-internal"></span>  
          
          <div class="wl-progress-background" ng-show="showConfidence">
            <div class="wl-progress-current" style="width:{{entity.confidence*100}}%"></div>
          </div>

          <i ng-class="{ 'wl-more': isOpened == false, 'wl-less': isOpened == true }" ng-click="toggle()"></i>
  	    </div>
        <div class="details" ng-show="isOpened">
          <wl-entity-form entity="entity" on-submit="toggle()"></wl-entity-form>
        </div>
  	  </div>
  	"""
    link: ($scope, $element, $attrs, $boxCtrl) ->				      
      
      # Add tile to related container scope
      $boxCtrl?.addTile $scope

      $scope.isOpened = false
      
      $scope.isInternal = ()->
        if $scope.entity.id.startsWith configuration.datasetUri
          return true
        return false 
       	
      $scope.toggle = ()->
        if !$scope.isOpened 
          $boxCtrl?.closeTiles()    
        $scope.isOpened = !$scope.isOpened
        
  ])