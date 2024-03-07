from django.shortcuts import render
from rest_framework import generics
from blog.models import Post
from .serializers import PostSerializer

class PostList(generics.ListCreateAPIView): #inheritance ListCreateAPIView
    #generics.ListCreateAPIView is used, which is a generic view that combines listing and creation functionality. It automatically handles GET requests for listing objects and POST requests for creating new objects.
    queryset = Post.postobjects.all() # gets data from Post table with postobjects manager setting
    #data from react (json) -> db format and vice versa
    serializer_class = PostSerializer
    pass
    
class PostDetail(generics.RetrieveDestroyAPIView):
    #combines both the retrieval (GET) and deletion (DELETE) operations for a single instance of a model.
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    pass
