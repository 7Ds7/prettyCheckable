$().ready(function(){

  var inputs = $('input.prettyCheckable:not(#TestDisabled)').prettyCheckable({
    labelPosition: 'right'
  });

  var specificInput = $('#TestDisabled').prettyCheckable();

  $('input[name=colors]').on('change', function(){

    if ($(this).val() === 'yes') {

      $('div#other-colors').slideDown();

    } else {

      $('div#other-colors').slideUp();

    }

  });

  $('input[name=disabledTrigger]').on('change', function(){

    if ($(this).val() === 'yes') {

      specificInput[0].enableInput();

    } else {

      specificInput[0].disableInput();

    }

  });

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 250;

  var htmlReporter = new jasmine.HtmlReporter();
  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  function execJasmine() {
    jasmineEnv.execute();
  }

  //preparing inputs for the Jasmine tests
  $('div#jasmine').on('show', function(){
    $('input#Test1, input#Test2').removeAttr('checked').parent().find('a').removeClass('checked');
  });

  $('div#jasmine').on('shown', function(){
    execJasmine();
  });

});