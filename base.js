
jQuery(document).ready(function(){
  jQuery('#classData').click(function(){
    jQuery.ajax({
      method: 'GET',
      url: 'class_adding',
      data:{
        class_name: jQuery('#edit-name').val(),
        division_name: jQuery('#edit-division').val(),
        token: mytoken
      },
      success:function(data){
        jQuery('<div id="messages"><div class="section clearfix"><div class="messages status"><h2 class="element-invisible">Status message</h2>'+data+'</div></div></div>').insertAfter('#header');
      },
      error:function(){
        jQuery('<div id="messages"><div class="section clearfix"><div class="messages error"><h2 class="element-invisible">Error message</h2>Every Field is need to fill up!</div></div></div>').insertAfter('#header');
      }
    });
  });
  jQuery('#studentData').click(function(){
    jQuery.ajax({
      method: 'GET',
      url: 'student_adding',
      data:{
        name: jQuery('#edit-name').val(),
        class_id: jQuery('#edit-class').val(),
        token: mytoken
      },
      success:function(data){
        jQuery('<div id="messages"><div class="section clearfix"><div class="messages status"><h2 class="element-invisible">Status message</h2>'+data+'</div></div></div>').insertAfter('#header');
      },
      error:function(){
        jQuery('<div id="messages"><div class="section clearfix"><div class="messages error"><h2 class="element-invisible">Error message</h2>Every Field is need to fill up!</div></div></div>').insertAfter('#header');
      }
    });
  });
});
