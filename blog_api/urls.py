from django.urls import path
from .views import PostList,PostDetail #import PostList and PostDetail classes from the .views

app_name = 'blog_api' #It helps prevent naming conflicts between different apps.

urlpatterns = [
    path('<int:pk>/',PostDetail.as_view(),name='detailcreate'),
    path('',PostList.as_view(),name='listcreate')
]
