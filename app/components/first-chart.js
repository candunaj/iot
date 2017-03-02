import Ember from 'ember';

export default Ember.Component.extend({
    y:0,

    didInsertElement(){
        var self = this;
        this._super(...arguments);

        new Morris.Line({
            // ID of the element in which to draw the chart.
            element: 'myfirstchart',
            // Chart data records -- each entry in this array corresponds to a point on
            // the chart.
            data: [
                { year: '2008', value: 20 },
                { year: '2009', value: 10 },
                { year: '2010', value: 5 },
                { year: '2011', value: 5 },
                { year: '2012', value: 20 }
            ],
            // The name of the data record attribute that contains x-values.
            xkey: 'year',
            // A list of names of data record attributes that contain y-values.
            ykeys: ['value'],
            // Labels for the ykeys -- will be displayed when you hover over the
            // chart.
            labels: ['Value']
        });

        // this.set('y',200);
        Ember.$('line').velocity({
            y2:200
        },500);

        // setInterval(function(){
        //     self.set('y',300);
        // },3000);
    }
});
