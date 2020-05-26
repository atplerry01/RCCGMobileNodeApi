"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paginator = function (items, page, perPage) {
    if (page === void 0) { page = 1; }
    if (perPage === void 0) { perPage = 100; }
    return new Promise(function (resolve, _reject) {
        var offset = (page - 1) * perPage;
        var paginatedItems = items.slice(offset).slice(0, perPage);
        var totalPages = Math.ceil(items.length / perPage);
        return resolve({
            page: page,
            per_page: perPage,
            pre_page: page - 1 ? page - 1 : null,
            next_page: totalPages > page ? page + 1 : null,
            total: items.length,
            total_pages: totalPages,
            data: paginatedItems,
        });
    });
};
