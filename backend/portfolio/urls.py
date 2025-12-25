from django.urls import path
from .views import project_list, chat_view

urlpatterns = [
    path("projects/", project_list),
    path("chat/", chat_view),
]
