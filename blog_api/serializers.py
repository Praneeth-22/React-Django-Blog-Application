from rest_framework import serializers
from blog.models import Post

class PostSerializer(serializers.ModelSerializer): #simplifies the process of creating serializers for Django models
    
    class Meta:
        model = Post
        fields = ('id','title','author','excerpt','content','status')