if (Meteor.isClient) {
  Books = new Mongo.Collection('books');

  Meteor.subscribe('books');

  Template.body.helpers({
    books: function() {
      return Books.find();
    }
  });
}

if (Meteor.isServer) {
  Meteor.publish('books', function() {
    var self = this;

    var books = [
      { title: 'Book 1' },
      { title: 'Book 2' },
      { title: 'Book 3' }
    ];

    _.each(books, function(book) {
      self.added('books', Random.id(), book);
    });

    self.ready();
  });
}