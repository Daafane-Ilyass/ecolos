from django.urls import path
from base.views import home_views as views

urlpatterns = [
    path('team', views.getTeamMembers, name='team'),
    path('articles', views.getArticles, name='articles'),
    path('faq', views.getFAQs, name='faq'),
]
