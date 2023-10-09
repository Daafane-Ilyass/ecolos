from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
# from rest_framework import status


from base.models import Article, TeamMember, FAQ
from base.serializers import ArticleSerializer, TeamMemberSerializer, FAQSerializer


@api_view(['GET'])
def getTeamMembers(request):
    cloudinary_base_url = "https://res.cloudinary.com/ddmrzgid5/"
    team = TeamMember.objects.all()
    for member in team:
        member.profileImage = f"{cloudinary_base_url}{member.profileImage}"
    serializer = TeamMemberSerializer(team, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getArticles(request):
    articles = Article.objects.all()
    serializer = ArticleSerializer(articles, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getFAQs(request):
    faq = FAQ.objects.all()
    serializer = FAQSerializer(faq, many=True)
    return Response(serializer.data)
