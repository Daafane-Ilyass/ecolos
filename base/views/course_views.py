from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
# from rest_framework import status


from base.models import Course
from base.serializers import CourseSerializer


@api_view(['GET'])
def getCourses(request):
    products = Course.objects.all()
    serializer = CourseSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getCourse(request, pk):
    product = Course.objects.get(_id=pk)
    serializer = CourseSerializer(product, many=False)
    return Response(serializer.data)
