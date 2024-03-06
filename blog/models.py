from django.db import models #contains Django's database-related classes.
from django.contrib.auth.models import User #since post is assosicate with a user , contains Django's built-in user authentication-related models, such as User
from django.utils import timezone
# Create your models here.

class Category(models.Model):
    #Category is a Django model class that inherits from models.Model
    name = models.CharField(max_length=100)
    
    def __str__(self): 
        #The __str__ method ensures that instances of the Category model are displayed with their names when printed or referenced in the Django admin interface.
        return self.name  #default string representation

class Post(models.Model):
    
    class PostObjects(models.Manager):
        
        def get_queryset(self):
            return super().get_queryset().filter(status='published')
        #this method is overridden to customize the queryset and responsible for returning the queryset that will be used to retrieve objects from the database.
    
    options = (('draft','Draft'),('published','Published')) #Each choice is a pair consisting of a human-readable name and a corresponding value.
    
    #attributes
    category = models.ForeignKey(Category,on_delete=models.PROTECT,default = 1) #establishes a many-to-one relationship between Post and Category models , on_delete=models.PROTECT argument specifies that if a category is deleted, the related posts will be protected from deletion and default=1 argument sets a default category for the post, which is the category with the primary key (ID) equal to 1.
    title = models.CharField(max_length = 250) 
    excerpt = models.TextField(null = True)
    content = models.TextField()
    slug = models.SlugField(max_length = 250,unique_for_date = 'published') # SlugField that is used to create search engine-friendly URLs for the post.
    published = models.DateTimeField(default = timezone.now) 
    author = models.ForeignKey(User,on_delete = models.CASCADE,related_name='blog_posts')
    status = models.CharField(max_length=10,choices=options,default='published')    
    
    objects = models.Manager() #default
    postobjects = PostObjects() # custom manager
    
    #Meta It allows you to specify various options that control the behavior of the model, such as ordering, database table name, verbose name, unique constraints, indexes, permissions, and more.
    class Meta:
        ordering =('-published',) #ordered based on published attribute descending order
    
    def __str__(self):
        return self.title
    
        