from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response


from base.models import Product
from base.serializers import ProductSerializer


@api_view(['GET'])
def getProducts(request):
    cloudinary_base_url = "https://res.cloudinary.com/ddmrzgid5/"
    products = Product.objects.all()
    for product in products:
        product.image = f"{cloudinary_base_url}{product.image}"
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
    cloudinary_base_url = "https://res.cloudinary.com/ddmrzgid5/"
    product = Product.objects.get(_id=pk)
    product.image = f"{cloudinary_base_url}{product.image}"
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)
