from django.shortcuts import render
from django.http import HttpResponse
from . models import Post
# Create your views here.


def index(request):
    # Get all posts, limit = 20
    posts = Post.objects.all()[:20]

    # Show
    return render(request, 'posts.html', {'posts': posts})
