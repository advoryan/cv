# Alexander Dvoryaninov

Located in **Minsk, Belarus**  
**+375 (29) 3–718-718  
E-mail: [a.dvoryan@gmail.com](mailto:a.dvoryan@gmail.com) \
LinkedIn: [linkedin.com/in/dvaraninau-aliaksandr-49aaab66](https://www.linkedin.com/in/dvaraninau-aliaksandr-49aaab66/) \
Github: [@advoryan](https://github.com/advoryan)**

## Profile

Financial Analyst with 10+ years experience. Created models of bank and local market performance monitor/analysis with Dashboards using Power BI (SQL, M, DAX). Review macroeconomic and financial sector, create 100+ reports with Adobe Illustrator and PowerPoint. I'm in charge of investment banking quartal and annual reports. Create a survey app for an official corporate strategy session using Django/Python. As a credit risk manager, I adjust and implement S&P Rating model for banks. Create 50+ VBA functions and projects for data processing, calculations, web scrapping and user-forms integration. Process and manage the big amount of data collected from various sources.

## Experience and education

>**Economical Cybernatic and Applied Mathematics**
* 2007 - Belarus State Economic University

>**Graduated Django (SQL, HTML, CSS, Python, Django courses)**  
* 2019 - IT-Academy

>**Power BI (SQL, M, DAX)**
* 2020 - Soft Club

>**English**
* 2019 - Streamline
* 2021 - International House

## Code examples

* [Github @advoryan](https://github.com/advoryan)

## Skills

```
SQL      ⬜️⬜️⬛️⬛️⬛️
PowerBI  ⬜️⬜️⬜️⬛️⬛️
Python   ⬜️⬜️⬛️⬛️⬛️
Django   ⬜️⬜️⬛️⬛️⬛️
JS       ⬜️⬛️⬛️⬛️⬛️
HTML     ⬜️⬜️⬜️⬛️⬛️
CSS      ⬜️⬜️⬛️⬛️⬛️
VBA      ⬜️⬜️⬜️⬜️⬛️
```
## English level is B2

## Code example (Django/Python)
```Python
from books.models import Book
from books.forms import BookCreateForm
from django.urls import reverse_lazy

class BookCreateView(PermissionRequiredMixin, CreateView):
    model = Book
    template_name = 'data/Creation_form.html'
    form_class = BookCreateForm
    permission_required = 'books.edit'

    def get_success_url(self):
        detail = self.request.POST.get("detail")
        list1 = self.request.POST.get("list")
        view1 = self.request.POST.get("view")
        if detail:
            return reverse_lazy("book-detail-view", kwargs={"pk": self.object.pk})
        elif list1:
            return reverse_lazy("book-list-view")
        return reverse_lazy("book-create-view")
```