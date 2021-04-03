from django.urls import path, include
from .views import *

app_name = 'application'

urlpatterns = [

    path('applications-list/', applications_list, name='applications_list'),
    path('application-detail/<int:id>/', application_detail, name='application_detail'),
    path('application-pdf/<int:id>/', application_pdf, name='application_pdf'),
    path('get-information/', get_information, name='get_information'),
    path('create-application-doc/<str:filename>/', create_application_doc, name='create_application_doc'),
    path('view-service-data/<int:service_id>/', view_service_data, name='view_service_data'),
    path('change-get-request/<str:key>/<str:value>/', change_get_request, name='change_get_request'),
    path('confirm-application-data/', ConfirmApplicationData.as_view(), name='confirm_application_data'),
    path('get-given-number/<int:id>/', GetGivenNumber.as_view(), name='get_given_number'),
    path('remove-application/', RemoveApplication.as_view(), name='remove_application'),
]
