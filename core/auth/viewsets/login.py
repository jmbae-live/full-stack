from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken

from core.auth.serializers import LoginSerializer


class LoginViewSet(ViewSet):
    serializer_class = LoginSerializer
    permission_classes = (AllowAny,)
    http_method_names = ['post']

    # @swagger_auto_schema(request_body=LoginSerializer) 시리얼라이저 참조 자동 파라미터 문서화
    @swagger_auto_schema(manual_parameters=[
        openapi.Parameter(
            name='email',
            in_=openapi.IN_PATH,
            description='Email',
            required=True,
            type=openapi.TYPE_STRING
        )
    ]) # 수동 지정 예시
    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])
        return Response(serializer.validated_data, status=status.HTTP_200_OK)
