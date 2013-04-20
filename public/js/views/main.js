define([
    'jquery',
    'underscore',
    'backbone',
    'models/env',
    'data/i18n',

    'views/sidebar',

    'i18n!templates/main.html'

], function($, _, Backbone, env, i18n, SidebarView, mainTpl){

    return Backbone.View.extend({

        el : $( 'body' ),

        template : _.template(mainTpl),


        initialize: function() {

            this.sidebarView = new SidebarView({
                model : this.options.sidebarModel
            });

        },

        render: function() {

            if (!this.rendered()) {

                this.$el.html(this.template({
                    name : env.me.getName(),
                    role : env.me.getRoleName(),
                    expiring_info: _.template(i18n('Alert: Your password expires in N days.'))({days: env.me.getNumberDaysToExpiration()})
                }));

                if (env.me.getNumberDaysToExpiration() >= 5) {
                    this.$('#reset-password-alert').hide();
                }

                this.sidebarView.setElement($('#sidebar'));
                this.sidebarView.render();
            }



            return this;
        },


        rendered : function() {
            var arr = $('body').has('.main');
            return arr.length > 0;
        }


    });

});
